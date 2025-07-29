#!/usr/bin/env python3
"""
This module provides a function that returns an asyncio.Task
using the wait_random coroutine.
"""

import asyncio
import importlib.util

# Dynamically import the wait_random coroutine from another file
module_name = "wait_random_module"
module_path = "0-basic_async_syntax.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

def task_wait_random(max_delay: int) -> asyncio.Task:
	"""
    Returns an asyncio Task for the wait_random coroutine.

    Parameters:
    max_delay (int): The maximum delay value passed to wait_random.

    Returns:
    asyncio.Task: The task object that can be awaited.
    """
	return asyncio.create_task(mod.wait_random(max_delay))
