#!/usr/bin/env python3
"""
This module defines an asynchronous generator that yields
random floats between 0 and 10, one per second, 10 times.
"""

import asyncio
from typing import AsyncGenerator
import random


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields 10 random floats between 0 and 10.

    Yields:
    float: A random float between 0 and 10 (inclusive), one per second.
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
