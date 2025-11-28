#!/usr/bin/env python3

"""
This module defines a coroutine that collects 10 random
numbers from an asynchronous generator using async comprehension.
"""
import typing
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """collects 10 random numbers"""
    return [number async for number in async_generator()]