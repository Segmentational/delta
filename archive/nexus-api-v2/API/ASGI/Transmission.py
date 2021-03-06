#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:   Jacob B. Sanders
# Source:  code.cloud-technology.io
# License: BSD 2-Clause License

#
# BSD 2-Clause License
#
# Copyright (c) 2020, Cloud Hybrid LLC. & Affiliates
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#
# * Redistributions of source code must retain the above copyright notice, this
#   list of conditions and the following disclaimer.
#
# * Redistributions in binary form must reproduce the above copyright notice,
#   this list of conditions and the following disclaimer in the documentation
#   and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#

"""
Custom Nexus API, ASGI Middleware
"""

import os
import sys
import asyncio
import textwrap
import http.cookies

import starlette.middleware
import starlette.middleware.base
import starlette.middleware.authentication
import starlette.requests
import starlette.responses

from starlette.types import ASGIApp, Message, Receive, Scope, Send

import Utility.Color

Base = starlette.middleware.base.BaseHTTPMiddleware
Starlette = starlette.middleware.base.ASGIApp
Cookie = http.cookies.SimpleCookie
Authentication = starlette.middleware.authentication.AuthenticationMiddleware
Credentials = starlette.middleware.authentication.AuthCredentials

URL = starlette.requests.URL
IP = starlette.requests.Address
Form = starlette.requests.FormData
Headers = starlette.requests.Headers

Request = starlette.requests.Request
Response = starlette.responses.Response

Color = Utility.Color.TTY()

class Track(Base):
    """
    Login Information Extraction
    """

    def __init__(self, app: Starlette, *argv, **kwargs):
        super().__init__(app)

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        await super(Track, self).__call__(scope, receive, send)

    async def Logger(self, Message: dict = None):
        """
        Return an ASGI message, with any body-type content omitted and replaced
            with a placeholder.

        Speed Benefit of Join vs. Format:
            - http://bugs.python.org/msg180449

        @Task - Implement Header Logging

            >>> headers = [
            >>>     (b"host", b"localhost:3000"),
            >>>     (b"pragma", b"no-cache"),
            >>>     (b"accept", b"application/json, text/plain, */*"),
            >>>     (b"authorization", b"Basic Og=="),
            >>>     (b"x-requested-with", b"XMLHttpRequest"),
            >>>     (b"accept-language", b"en-us"),
            >>>     (b"cache-control", b"no-cache"),
            >>>     (b"accept-encoding", b"gzip, deflate, br"),
            >>>     (b"content-type", b"application/x-www-form-urlencoded"),
            >>>     (b"origin", b"https://localhost:3000"),
            >>>     (b"content-length", b"63"),
            >>>     (b"referer", b"https://localhost:3000/Documentation"),
            >>>     (b"connection", b"keep-alive")
            >>> ]
        """

        if Message.get("type") == "http":
            # Task: Implement Header Logging
            # ... Headers = Message.get("headers")

            sys.stdout.write(
                Color.blue("[Nexus-API]")
                + ": " + Color.italic("(Egress) ")
                + "Header - "
                + Color.bold("Path")
                + Color.violet(" ::: ")
                + Color.bold(
                    Message.get("path", "N/A")
                ) + "\n"
            ); sys.stdout.flush()

            sys.stdout.write(
                Color.blue("[Nexus-API]")
                + ": " + Color.italic("(Egress) ")
                + "Header - "
                + Color.bold("Schema")
                + Color.violet(" ::: ")
                + Color.bold(
                    Message.get("scheme", "N/A").upper()
                ) + "\n"
            ); sys.stdout.flush()

            sys.stdout.write(
                Color.blue("[Nexus-API]")
                + ": " + Color.italic("(Egress) ")
                + "Header - "
                + Color.bold("Method")
                + Color.violet(" ::: ")
                + Color.bold(
                    Message.get("method", "N/A")
                ) + "\n"
            ); sys.stdout.flush()

            sys.stdout.write(
                Color.blue("[Nexus-API]")
                + ": " + Color.italic("(Egress) ")
                + "Header - "
                + Color.bold("HTTP-Version")
                + Color.violet(" ::: ")
                + Color.bold(Message.get("http_version", "N/A"))
                + "\n"
            ); sys.stdout.flush()

            Query = Message.get("query_string").decode("UTF-8")

            if Query != "":
                sys.stdout.write(
                    Color.blue("[Nexus-API]")
                    + ": " + Color.italic("(Egress) ")
                    + "Header - "
                    + Color.bold("Query")
                    + Color.violet(" ::: ")
                    + Color.bold(Query)
                    + "\n"
                ); sys.stdout.flush()

        return Message

    async def __call__(self, scope, receive, send):
        async def reception():
            return await receive()

        async def submission(message):
            return await send(message)

        try:
            await self.app(scope, reception, submission)
        except BaseException as Error:
            raise Error from None

        await self.Logger(scope)


Middleware = [
    starlette.middleware.Middleware(Track)
]

__all__ = [
    "Middleware",
    "Track"
]
