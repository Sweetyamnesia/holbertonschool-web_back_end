#!/usr/bin/env python3
"""
Module for paginating a dataset with hypermedia metadata.
"""

import csv
from typing import List, Dict


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

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List[str]]:
        """
        Retrieve a page of data.
        """
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0

        start, end = self.index_range(page, page_size)
        return self.dataset()[start:end]

    @staticmethod
    def index_range(page, page_size) -> tuple[int, int]:
        """
        Return start and end indexes for pagination.
        """
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Return pagination info and dataset page.
        """

        return {
            "page_size": len(self.dataset()),
            "page": page,
            "data": self.dataset(),
            "next_page": page + 1,
            "prev_page": page - 1,
            "total_pages": total_pages
        }
