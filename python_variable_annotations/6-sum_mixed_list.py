#!/usr/bin/env python3
"""Module for sum_mixed_list function with type annotations."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    return float(sum(mxd_lst))
