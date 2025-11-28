#!/usr/bin/env python3
"""Module for measuring async comprehension runtime."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total runtime of executing async_comprehension 4 times.

    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total execution time.

    The total runtime is roughly 10 seconds because all four coroutines
    run concurrently (in parallel), and each async_comprehension takes
    about 10 seconds to complete (10 iterations * 1 second sleep each).
    Since they run in parallel, the total time is the maximum of the
    individual times, which is approximately 10 seconds.

    Returns:
        The total runtime in seconds.
    """
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.time()
    return end_time - start_time
