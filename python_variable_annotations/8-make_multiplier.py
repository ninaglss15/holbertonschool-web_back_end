#!/usr/bin/env python3
"""Module for make_multiplier function with type annotations."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create a multiplier function that multiplies by a given value.

    Args:
        multiplier: The float value to multiply by.

    Returns:
        A function that takes a float and returns it multiplied by multiplier.
    """
    def multiply(x: float) -> float:
        """Multiply x by the multiplier value.

        Args:
            x: A float value to multiply.

        Returns:
            The product of x and multiplier.
        """
        return x * multiplier

    return multiply
