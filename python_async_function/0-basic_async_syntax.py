#!/usr/bin/env python3
"""
This module provides an asynchronous coroutine that waits
for a random delay and returns it.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay between
    0 and max_delay seconds (inclusive), and returns the delay.

    Parameters:
    max_delay (int): Maximum number of seconds to wait. Defaults to 10.

    Returns:
    float: The actual delay that was waited.
    """

    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
