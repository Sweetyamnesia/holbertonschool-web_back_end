#!/usr/bin/env python3
"""
This module demonstrates duck typing by using an iterable of elements
and returning a list of tuples with each element and its length.
"""

from typing import Iterable, List

def element_length(lst : Iterable) -> List:
    """
    Parameters:
    lst (Iterable): An iterable containing elements
    that support the len() function.

    Returns:
    A list of tuples where each tuple contains an element 
    and its length.
    """
    return [(i, len(i)) for i in lst]
