#!/usr/bin/env python3
"""
This module defines an asynchronous generator that yields
10 random numbers between 0 and 10 with a delay of 1 second between each.
"""
import asyncio
import random
import typing


async def async_generator() -> typing.Generator[float, None, None]:
    """Asynchronous generator that yields 10 random numbers."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)