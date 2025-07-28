#!/usr/bin/env python3
"""
This modules contains duck type with iterable objects
"""


def element_length(lst) -> list:
    """
    Parameters:
    lst: the list

    Returns:
    the length of the list
    """
    return [(i, len(i)) for i in lst]
