#!/usr/bin/env python3
"""
This module contains a function that takes
two integer arguments to calculate the start
and end indices for a specific page of data.
"""


def index_range(page, page_size):
    """
    Parameters:
    page(int) : the current page number
    page_size(int) : the number of items to display

    Return:
    Tuple of size, start and end index corresponding to the
    range of indexes.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
