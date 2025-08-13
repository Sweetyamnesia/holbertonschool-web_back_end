#!/usr/bin/env python3
"""
This module contains a function that changes all topics
of a school document based on the name.
"""


def update_topics(mongo_collection, name, topics):
    """
    Args:
    mongo_collection: A PyMongo collection object.
    name(string): the school name to update.
    topics(list of strings): the list of topics approached
    in the school.
    """

    result = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return result
