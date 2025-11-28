#!/usr/bin/env python3

"""
This module defines a coroutine that measures the total execution
time of running async_comprehension 4 times in parallel using asyncio.gather.
"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """measures the total execution time"""
    start = time.perf_counter()

    await asyncio.gather(*[async_comprehension() for _ in range(4)])

    end = time.perf_counter()

    return end - start