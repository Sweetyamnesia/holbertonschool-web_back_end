#!/usr/bin/env python3
"""
This module provides a function that computes
the sum of a list containing both integers and floating-point numbers.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Parameters:
    mxd_lst (List[Union[int, float]]): A list of numbers
    (int and/or float) to sum.

    Returns:
    float: The total sum as a floating-point number.
    """
    return sum(mxd_lst)
