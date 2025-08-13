#!/usr/bin/env python3
"""
This module contains a function that returns
the list of school having a specific topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools (documents) from the given MongoDB collection
    that have a specific topic.

    Args:
        mongo_collection: A PyMongo collection object.
        topic (str): The topic to search for within the documents.

    Returns:
        A list of documents (schools) where the 'topic' field matches
        the provided topic.
    """
    schools = list(mongo_collection.find({"topic": topic}))
    return schools
