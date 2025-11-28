#!/usr/bin/env python3
"""Module for creating async tasks."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Create and return an asyncio.Task for wait_random.

    Args:
        max_delay: Maximum delay in seconds for the task.

    Returns:
        An asyncio.Task that runs wait_random(max_delay).
    """
    return asyncio.create_task(wait_random(max_delay))
