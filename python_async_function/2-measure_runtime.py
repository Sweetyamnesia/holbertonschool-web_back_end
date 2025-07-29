#!/usr/bin/env python3
"""
This module measures the total execution time of wait_n
and returns the average time per coroutine.
"""

import asyncio
import time
import importlib.util

# Dynamically import the wait_random coroutine from another file
module_name = "wait_n_module"
module_path = "1-concurrent_coroutines.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


async def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay),
    and returns the average execution time per coroutine.

    Parameters:
    n (int): number of times to call wait_random concurrently.
    max_delay (int): maximum delay for each wait_random.

    Returns:
    float: average execution time per coroutine.
    """

    start = time.perf_counter()
    asyncio.run()
    elapsed = time.perf_counter() - start
    total_time = asyncio.create_task(mod.wait_n(n, max_delay))
    return total_time / n
