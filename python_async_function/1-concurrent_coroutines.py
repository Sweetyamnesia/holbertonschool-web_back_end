#!/usr/bin/env python3
import asyncio
from typing import List
import importlib.util

module_name = "wait_random_module"
module_path = "0-basic_async_syntax.py"

spec = importlib.util.spec_from_file_location(module_name, module_path)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


async def wait_n(n: int, max_delay: int) -> List[float]:
    tasks = asyncio.create_task(mod.wait_random(max_delay))
    delays = await asyncio.gather(tasks)
    return delays
