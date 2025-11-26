#!/usr/bin/env python3
"""Module for make_multiplier function with type annotations."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiply(x: float) -> float:
        return x * multiplier
    
    return multiply
