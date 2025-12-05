#!/usr/bin/env python3
"""
Module that returns schools by topic from a MongoDB collection
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic

    Args:
        mongo_collection: pymongo collection object
        topic (string): the topic to search for

    Returns:
        List of schools that have the specified topic
    """
    return list(mongo_collection.find({"topics": topic}))
