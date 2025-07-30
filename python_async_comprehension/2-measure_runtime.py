#!/usr/bin/env python3
"""
This module measures the total runtime of executing
4 concurrent async comprehensions.
"""

import asyncio
import time
import importlib.util

# Dynamically import the wait_random coroutine from another file
module_name = "async_comprehension_module"
module_path = "1-async_comprehension.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


async def measure_runtime() -> float:
    """
    Run 4 concurrent executions of async_comprehension
    and measure the total runtime.

    Returns:
        float: The total time taken to run the 4 coroutines concurrently.
    """
    start_time = time.perf_counter()

    await asyncio.gather(
        mod.async_comprehension(),
        mod.async_comprehension(),
        mod.async_comprehension(),
        mod.async_comprehension()
    )

    end_time = time.perf_counter()
    total_time = end_time - start_time
    return total_time
