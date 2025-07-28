#!/usr/bin/env python3
"""
This module provides a function that generates a
multiplier function for floats.
"""


def make_multiplier(multiplier: float) -> float:
    """
    Creates a multiplier function.

    Parameters:
    multiplier (float): The number to multiply inputs by.

    Returns:
    A function that takes a float and returns it
    multiplied by the given multiplier.
    """
    return float(multiplier)
