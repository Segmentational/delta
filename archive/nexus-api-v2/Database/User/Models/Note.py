#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

from . import *

import Database.SQL

import Database.User.Models.Base as Base

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "User-Note"
    __mapper_args__ = {"eager_defaults": True}

    Content: Column = Column(
        key = "Content",
        name = "Content",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = "N/A",
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    Internal: Column = Column(
        key = "Internal",
        name = "Internal",
        type_ = Boolean,
        index = True,
        quote = True,
        unique = False,
        default = False,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    UID: Column = Column(UUID, Foreign("User.ID"), name = "User-Foreign-Key", nullable = True, index = True)
    User: Relationship = Relationship("Database.User.Models.Nexus.Table", back_populates = "Note")

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
