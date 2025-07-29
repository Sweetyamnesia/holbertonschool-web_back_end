#!/usr/bin/env python3
"""
This module defines task_wait_n which schedules multiple
task_wait_random calls concurrently.
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


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run task_wait_random n times concurrently and return
    the list of delays in ascending order.

    Parameters:
    n (int): number of tasks to run.
    max_delay (int): maximum delay for each.

    Returns:
    List[float]: list of delays.
    """
    tasks = [mod.wait_random(max_delay)]
    delays = await asyncio.gather(*tasks)
    return delays
