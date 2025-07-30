#!/usr/bin/env python3
"""
This module imports an asynchronous generator and uses an async comprehension
to collect its values.
"""

import asyncio
from typing import List
import importlib.util

# Dynamically import the wait_random coroutine from another file
module_name = "async_generator_module"
module_path = "0-async_generator.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


async def async_comprehension() -> List[float]:
    """
    Collects 10 random floats from the async generator
    using async comprehension.

    Returns:
    List[float]: A list of 10 random floats between 0 and 10.
    """
    return [i async for i in mod.async_generator()]
