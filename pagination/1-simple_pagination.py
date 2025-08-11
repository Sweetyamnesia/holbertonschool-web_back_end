#!/usr/bin/env python3
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a page of data.

        Args:
        page: The page number to retrieve, must be an integer greater than 0.
        page_size: The number of items per page, must be an integer
        greater than 0.

        Returns:
        A list representing the data for the specified page.

        Raises:
        AssertionError: If either page or page_size is not an integer
        or is not greater than 0.
        """
        self.page = page
        self.page_size = page_size
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0

        start, end = self.index_range(page, page_size)
        return self.dataset()[start:end]

    @staticmethod
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
