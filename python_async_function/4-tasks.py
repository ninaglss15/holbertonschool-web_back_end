#!/usr/bin/env python3
"""Module for task-based concurrent operations."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn n task_wait_random tasks and return sorted delays.

    Args:
        n: Number of tasks to spawn.
        max_delay: Maximum delay in seconds for each task.

    Returns:
        A list of all delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
