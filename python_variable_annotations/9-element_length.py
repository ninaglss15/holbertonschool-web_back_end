#!/usr/bin/env python3
"""Module for element_length function with type annotations."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return tuples of sequences and their lengths.

    Args:
        lst: An iterable of sequences (strings, lists, tuples, etc.).

    Returns:
        A list of tuples, each containing a sequence and its length.
    """
    return [(i, len(i)) for i in lst]
