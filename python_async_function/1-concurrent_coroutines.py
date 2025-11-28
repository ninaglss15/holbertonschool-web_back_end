#!/usr/bin/env python3
"""Module for concurrent coroutines with wait_n function."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn n wait_random coroutines and return sorted delays.

    Args:
        n: Number of coroutines to spawn.
        max_delay: Maximum delay in seconds for each coroutine.

    Returns:
        A list of all delays in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
