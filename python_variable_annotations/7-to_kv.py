#!/usr/bin/env python3
"""Module for to_kv function with type annotations."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple with a string key and the square of a numeric value.

    Args:
        k: A string key.
        v: An integer or float value to be squared.

    Returns:
        A tuple containing the string k and v squared as a float.
    """
    return (k, float(v ** 2))
