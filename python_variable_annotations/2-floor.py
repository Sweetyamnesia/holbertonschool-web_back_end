#!/usr/bin/env python3
"""
This module provides a function that returns the floor
of a given floating-point number.
"""


import math


def floor(n: float) -> int:
    """
    Returns the largest integer less than or equal
    to the given floating-point number.

    Parameters:
    n (float): A floating-point number.

    Returns:
    float: The floor of the input number.
    """
    return math.floor(n)
