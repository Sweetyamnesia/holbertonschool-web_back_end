#!/usr/bin/env python3
"""
This module defines an asynchronous function that runs multiple coroutines
concurrently and returns their delays in a sorted list.
"""

import asyncio
from typing import List
import importlib.util

# Dynamically import the wait_random coroutine from another file
module_name = "wait_random_module"
module_path = "0-basic_async_syntax.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes wait_random coroutine n times concurrently,
    each with a maximum delay of max_delay seconds.

    Parameters:
    n (int): The number of times to run the coroutine.
    max_delay (int): The maximum delay value passed to each coroutine.

    Returns:
    List[float]: A list of delays returned by each coroutine,
    sorted in ascending order.
    """
    tasks = asyncio.create_task(mod.wait_random(max_delay))
    delays = await asyncio.gather(tasks)
    return delays
