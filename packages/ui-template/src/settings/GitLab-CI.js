const Schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://gitlab.com/.gitlab-ci.yml",
    "title": "Gitlab CI configuration",
    "description": "Gitlab has a built-in solution for doing CI called Gitlab CI. It is configured by supplying a file called `.gitlab-ci.yml`, which will list all the jobs that are going to run for the project. A full list of all options can be found at https://docs.gitlab.com/ee/ci/yaml/. You can read more about Gitlab CI at https://docs.gitlab.com/ee/ci/README.html.",
    "type": "object",
    "properties": {
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "image": { "$ref": "#/definitions/image" },
        "services": { "$ref": "#/definitions/services" },
        "before_script": { "$ref": "#/definitions/before_script" },
        "after_script": { "$ref": "#/definitions/after_script" },
        "variables": { "$ref": "#/definitions/globalVariables" },
        "cache": { "$ref": "#/definitions/cache" },
        "default": {
            "type": "object",
            "properties": {
                "after_script": { "$ref": "#/definitions/after_script" },
                "artifacts": { "$ref": "#/definitions/artifacts" },
                "before_script": { "$ref": "#/definitions/before_script" },
                "cache": { "$ref": "#/definitions/cache" },
                "image": { "$ref": "#/definitions/image" },
                "interruptible": { "$ref": "#/definitions/interruptible" },
                "retry": { "$ref": "#/definitions/retry" },
                "services": { "$ref": "#/definitions/services" },
                "tags": { "$ref": "#/definitions/tags" },
                "timeout": { "$ref": "#/definitions/timeout" }
            },
            "additionalProperties": false
        },
        "stages": {
            "type": "array",
            "description": "Groups jobs into stages. All jobs in one stage must complete before next stage is executed. Defaults to ['build', 'test', 'deploy'].",
            "default": [ "build", "test", "deploy" ],
            "items": {
                "type": "string"
            },
            "uniqueItems": true,
            "minItems": 1
        },
        "include": {
            "description": "Can be `IncludeItem` or `IncludeItem[]`. Each `IncludeItem` will be a string, or an object with properties for the method if including external YAML file. The external content will be fetched, included and evaluated along the `.gitlab-ci.yml`.",
            "oneOf": [
                { "$ref": "#/definitions/include_item" },
                {
                    "type": "array",
                    "items": { "$ref": "#/definitions/include_item" }
                }
            ]
        },
        "pages": {
            "$ref": "#/definitions/job",
            "description": "A special job used to upload static sites to Gitlab pages. Requires a `public/` directory with `artifacts.path` pointing to it."
        },
        "workflow": {
            "type": "object",
            "properties": {
                "rules": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "if": {
                                "type": "string"
                            },
                            "variables": { "$ref": "#/definitions/variables" },
                            "when": {
                                "type": "string",
                                "enum": [ "always", "never" ]
                            }
                        },
                        "additionalProperties": false
                    }
                }
            }
        }
    },
    "patternProperties": {
        "^[.]": {
            "description": "Hidden keys.",
            "anyOf": [
                { "$ref": "#/definitions/job_template" },
                { "description": "Arbitrary YAML anchor." }
            ]
        }
    },
    "additionalProperties": {
        "$ref": "#/definitions/job"
    },
    "definitions": {
        "artifacts": {
            "type": "object",
            "description": "Used to specify a list of files and directories that should be attached to the job if it succeeds. Artifacts are sent to Gitlab where they can be downloaded.",
            "additionalProperties": false,
            "properties": {
                "paths": {
                    "type": "array",
                    "description": "A list of paths to files/folders that should be included in the artifact.",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1
                },
                "exclude": {
                    "type": "array",
                    "description": "A list of paths to files/folders that should be excluded in the artifact.",
                    "items": {
                        "type": "string"
                    },
                    "minItems": 1
                },
                "expose_as": {
                    "type": "string",
                    "description": "Can be used to expose job artifacts in the merge request UI. GitLab will add a link <expose_as> to the relevant merge request that points to the artifact."
                },
                "name": {
                    "type": "string",
                    "description": "Name for the archive created on job success. Can use variables in the name, e.g. '$CI_JOB_NAME'"
                },
                "untracked": {
                    "type": "boolean",
                    "description": "Whether to add all untracked files (along with 'artifacts.paths') to the artifact.",
                    "default": false
                },
                "when": {
                    "description": "Configure when artifacts are uploaded depended on job status.",
                    "default": "on_success",
                    "oneOf": [
                        {
                            "enum": [ "on_success" ],
                            "description": "Upload artifacts only when the job succeeds (this is the default)."
                        },
                        {
                            "enum": [ "on_failure" ],
                            "description": "Upload artifacts only when the job fails."
                        },
                        {
                            "enum": [ "always" ],
                            "description": "Upload artifacts regardless of job status."
                        }
                    ]
                },
                "expire_in": {
                    "type": "string",
                    "description": "How long artifacts should be kept. They are saved 30 days by default. Artifacts that have expired are removed periodically via cron job. Supports a wide variety of formats, e.g. '1 week', '3 mins 4 sec', '2 hrs 20 min', '2h20min', '6 mos 1 day', '47 yrs 6 mos and 4d', '3 weeks and 2 days'.",
                    "default": "30 days"
                },
                "reports": {
                    "type": "object",
                    "description": "Reports will be uploaded as artifacts, and often displayed in the Gitlab UI, such as in Merge Requests.",
                    "additionalProperties": false,
                    "properties": {
                        "junit": {
                            "description": "Path for file(s) that should be parsed as JUnit XML result",
                            "oneOf": [
                                {
                                    "type": "string",
                                    "description": "Path to a single XML file"
                                },
                                {
                                    "type": "array",
                                    "description": "A list of paths to XML files that will automatically be concatenated into a single file",
                                    "items": {
                                        "type": "string"
                                    },
                                    "minItems": 1
                                }
                            ]
                        },
                        "cobertura": {
                            "description": "Path for file(s) that should be parsed as Cobertura XML coverage report",
                            "oneOf": [
                                {
                                    "type": "string",
                                    "description": "Path to a single XML file"
                                },
                                {
                                    "type": "array",
                                    "description": "A list of paths to XML files that will automatically be merged into one report",
                                    "items": {
                                        "type": "string"
                                    },
                                    "minItems": 1
                                }
                            ]
                        },
                        "codequality": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with code quality report(s) (such as Code Climate)."
                        },
                        "dotenv": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files containing runtime-created variables for this job."
                        },
                        "lsif": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files containing code intelligence (Language Server Index Format)."
                        },
                        "sast": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with SAST vulnerabilities report(s)."
                        },
                        "dependency_scanning": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with Dependency scanning vulnerabilities report(s)."
                        },
                        "container_scanning": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with Container scanning vulnerabilities report(s)."
                        },
                        "dast": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with DAST vulnerabilities report(s)."
                        },
                        "license_management": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Deprecated in 12.8: Path to file or list of files with license report(s)."
                        },
                        "license_scanning": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with license report(s)."
                        },
                        "performance": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with performance metrics report(s)."
                        },
                        "requirements": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with requirements report(s)."
                        },
                        "secret_detection": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with secret detection report(s)."
                        },
                        "metrics": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with custom metrics report(s)."
                        },
                        "terraform": {
                            "$ref": "#/definitions/string_file_list",
                            "description": "Path to file or list of files with terraform plan(s)."
                        }
                    }
                },
                "public": {
                    "type": "boolean",
                    "description": "Used to determine whether the job artifacts should be publicly available for download by anonymous and guest users.",
                    "default": true
                }
            }
        },
        "string_file_list": {
            "oneOf": [
                {
                    "type": "string"
                },
                {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            ]
        },
        "include_item": {
            "oneOf": [
                {
                    "description": "Will infer the method based on the value. E.g. `https://...` strings will be of type `include:remote`, and `/templates/...` will be of type `include:local`.",
                    "type": "string",
                    "format": "uri-reference",
                    "pattern": "^(https?://|/).+\\.ya?ml$"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "local": {
                            "description": "Relative path from local repository root (`/`) to the `yaml`/`yml` file template. The file must be on the same branch, and does not work across git submodules.",
                            "type": "string",
                            "format": "uri-reference",
                            "pattern": "\\.ya?ml$"
                        }
                    },
                    "required": [ "local" ]
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "project": {
                            "description": "Path to the project, e.g. `group/project`, or `group/sub-group/project`.",
                            "type": "string",
                            "pattern": "\\S/\\S"
                        },
                        "ref": {
                            "description": "Branch/Tag/Commit-hash for the target project.",
                            "type": "string"
                        },
                        "file": {
                            "oneOf": [
                                {
                                    "description": "Relative path from project root (`/`) to the `yaml`/`yml` file template.",
                                    "type": "string",
                                    "pattern": "\\.ya?ml$"
                                },
                                {
                                    "description": "List of files by relative path from project root (`/`) to the `yaml`/`yml` file template.",
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "pattern": "\\.ya?ml$"
                                    }
                                }
                            ]
                        }
                    },
                    "required": [ "project", "file" ]
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "template": {
                            "description": "Use a `.gitlab-ci.yml` template as a base, e.g. `Nodejs.gitlab-ci.yml`.",
                            "type": "string",
                            "format": "uri-reference",
                            "pattern": "\\.ya?ml$"
                        }
                    },
                    "required": [ "template" ]
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "remote": {
                            "description": "URL to a `yaml`/`yml` template file using HTTP/HTTPS.",
                            "type": "string",
                            "format": "uri-reference",
                            "pattern": "^https?://.+\\.ya?ml$"
                        }
                    },
                    "required": [ "remote" ]
                }
            ]
        },
        "image": {
            "oneOf": [
                {
                    "type": "string",
                    "minLength": 1,
                    "description": "Full name of the image that should be used. It should contain the Registry part if needed."
                },
                {
                    "type": "object",
                    "description": "Specifies the docker image to use for the job or globally for all jobs. Job configuration takes precedence over global setting. Requires a certain kind of Gitlab runner executor.",
                    "additionalProperties": false,
                    "properties": {
                        "name": {
                            "type": "string",
                            "minLength": 1,
                            "description": "Full name of the image that should be used. It should contain the Registry part if needed."
                        },
                        "entrypoint": {
                            "type": "array",
                            "description": "Command or script that should be executed as the container's entrypoint. It will be translated to Docker's --entrypoint option while creating the container. The syntax is similar to Dockerfile's ENTRYPOINT directive, where each shell token is a separate string in the array.",
                            "minItems": 1
                        }
                    },
                    "required": [ "name" ]
                }
            ],
            "description": "Specifies the docker image to use for the job or globally for all jobs. Job configuration takes precedence over global setting. Requires a certain kind of Gitlab runner executor."
        },
        "services": {
            "type": "array",
            "description": "Similar to `image` property, but will link the specified services to the `image` container.",
            "items": {
                "oneOf": [
                    {
                        "type": "string",
                        "minLength": 1,
                        "description": "Full name of the image that should be used. It should contain the Registry part if needed."
                    },
                    {
                        "type": "object",
                        "description": "",
                        "additionalProperties": false,
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "Full name of the image that should be used. It should contain the Registry part if needed.",
                                "minLength": 1
                            },
                            "entrypoint": {
                                "type": "array",
                                "description": "Command or script that should be executed as the container's entrypoint. It will be translated to Docker's --entrypoint option while creating the container. The syntax is similar to Dockerfile's ENTRYPOINT directive, where each shell token is a separate string in the array.",
                                "minItems": 1,
                                "items": {
                                    "type": "string"
                                }
                            },
                            "command": {
                                "type": "array",
                                "description": "Command or script that should be used as the container's command. It will be translated to arguments passed to Docker after the image's name. The syntax is similar to Dockerfile's CMD directive, where each shell token is a separate string in the array.",
                                "minItems": 1,
                                "items": {
                                    "type": "string"
                                }
                            },
                            "alias": {
                                "type": "string",
                                "description": "Additional alias that can be used to access the service from the job's container. Read Accessing the services for more information.",
                                "minLength": 1
                            }
                        },
                        "required": [ "name" ]
                    }
                ]
            }
        },
        "secrets": {
            "type": "object",
            "description": "Defines secrets to be injected as environment variables",
            "additionalProperties": {
                "type": "object",
                "additionalProperties": {
                    "type": "object",
                    "description": "Environment variable name",
                    "properties": {
                        "vault": {
                            "oneOf": [
                                {
                                    "type": "string",
                                    "description": "The secret to be fetched from Vault (e.g. 'production/db/password@ops' translates to secret 'ops/data/production/db', field `password`)"
                                },
                                {
                                    "type": "object",
                                    "properties": {
                                        "engine": {
                                            "type": "object",
                                            "properties": {
                                                "name": { "type": "string" },
                                                "path": { "type": "string" }
                                            },
                                            "required": [ "name", "path" ]
                                        },
                                        "path": { "type": "string" },
                                        "field": { "type": "string" }
                                    },
                                    "required": [ "engine", "path", "field" ]
                                }
                            ]
                        }
                    },
                    "required": [ "vault" ]
                }
            }
        },
        "before_script": {
            "type": "array",
            "description": "Defines scripts that should run *before* the job. Can be set globally or per job.",
            "items": {
                "anyOf": [
                    {
                        "type": "string"
                    },
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "after_script": {
            "type": "array",
            "description": "Defines scripts that should run *after* the job. Can be set globally or per job.",
            "items": {
                "anyOf": [
                    {
                        "type": "string"
                    },
                    {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                ]
            }
        },
        "rules": {
            "type": "array",
            "description": "rules allows for an array of individual rule objects to be evaluated in order, until one matches and dynamically provides attributes to the job.",
            "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "if": {
                        "type": "string",
                        "description": "Expression to evaluate whether additional attributes should be provided to the job"
                    },
                    "changes": {
                        "type": "array",
                        "description": "Additional attributes will be provided to job if any of the provided paths matches a modified file",
                        "items": {
                            "type": "string"
                        }
                    },
                    "exists": {
                        "type": "array",
                        "description": "Additional attributes will be provided to job if any of the provided paths matches an existing file in the repository",
                        "items": {
                            "type": "string"
                        }
                    },
                    "variables": { "$ref": "#/definitions/variables" },
                    "when": { "$ref": "#/definitions/when" },
                    "start_in": { "$ref": "#/definitions/start_in" },
                    "allow_failure": { "$ref": "#/definitions/allow_failure" }
                }
            }
        },
        "globalVariables": {
            "description": "Defines environment variables globally. Job level property overrides global variables. If a job sets `variables: {}`, all global variables are turned off. You can use the value and description keywords to define variables that are prefilled when running a pipeline manually.",
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "type": [ "string", "integer" ] },
                    {
                        "type": "object",
                        "properties": {
                            "value": { "type": "string" },
                            "description": {
                                "type": "string",
                                "description": "Explains what the variable is used for, what the acceptable values are."
                            }
                        }
                    }
                ]
            }
        },
        "variables": {
            "type": "object",
            "description": "Defines environment variables for specific jobs. Job level property overrides global variables. If a job sets `variables: {}`, all global variables are turned off.",
            "additionalProperties": {
                "type": [ "string", "integer" ]
            }
        },
        "timeout": {
            "type": "string",
            "description": "Allows you to configure a timeout for a specific job (e.g. `1 minute`, `1h 30m 12s`). Read more: https://docs.gitlab.com/ee/ci/yaml/README.html#timeout",
            "minLength": 1
        },
        "start_in": {
            "type": "string",
            "description": "Used in conjunction with 'when: delayed' to set how long to delay before starting a job.",
            "minLength": 1
        },
        "allow_failure": {
            "description": "Allow job to fail. A failed job does not cause the pipeline to fail.",
            "oneOf": [
                {
                    "description": "Setting this option to true will allow the job to fail while still letting the pipeline pass.",
                    "type": "boolean",
                    "default": false
                },
                {
                    "description": "Exit code that are not considered failure. The job fails for any other exit code.",
                    "type": "object",
                    "additionalProperties": false,
                    "required": [ "exit_codes" ],
                    "properties": {
                        "exit_codes": {
                            "type": "integer"
                        }
                    }
                },
                {
                    "description": "You can list which exit codes are not considered failures. The job fails for any other exit code.",
                    "type": "object",
                    "additionalProperties": false,
                    "required": [ "exit_codes" ],
                    "properties": {
                        "exit_codes": {
                            "type": "array",
                            "minItems": 1,
                            "uniqueItems": true,
                            "items": {
                                "type": "integer"
                            }
                        }
                    }
                }
            ]
        },
        "when": {
            "description": "Describes the conditions for when to run the job. Defaults to 'on_success'.",
            "default": "on_success",
            "oneOf": [
                {
                    "enum": [ "on_success" ],
                    "description": "Execute job only when all jobs from prior stages succeed."
                },
                {
                    "enum": [ "on_failure" ],
                    "description": "Execute job when at least one job from prior stages fails."
                },
                {
                    "enum": [ "always" ],
                    "description": "Execute job regardless of the status from prior stages."
                },
                {
                    "enum": [ "manual" ],
                    "description": "Execute the job manually from Gitlab UI or API. Read more: https://docs.gitlab.com/ee/ci/yaml/#when-manual"
                },
                {
                    "enum": [ "delayed" ],
                    "description": "Execute a job after the time limit in 'start_in' expires. Read more: https://docs.gitlab.com/ee/ci/yaml/#when-delayed"
                },
                {
                    "enum": [ "never" ],
                    "description": "Never execute the job."
                }
            ]
        },
        "cache": {
            "oneOf": [
                {
                    "$ref": "#/definitions/cache_entry"
                },
                {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/cache_entry"
                    }
                }
            ]
        },
        "cache_entry": {
            "type": "object",
            "description": "Specify files or directories to cache between jobs. Can be set globally or per job.",
            "additionalProperties": false,
            "properties": {
                "paths": {
                    "type": "array",
                    "description": "List of files or paths to cache.",
                    "items": {
                        "type": "string"
                    }
                },
                "key": {
                    "oneOf": [
                        {
                            "type": "string",
                            "description": "Unique cache ID, to allow e.g. specific branch or job cache. Environment variables can be used to set up unique keys (e.g. \"$CI_COMMIT_REF_SLUG\" for per branch cache)."
                        },
                        {
                            "type": "object",
                            "description": "When you include cache:key:files, you must also list the project files that will be used to generate the key, up to a maximum of two files. The cache key will be a SHA checksum computed from the most recent commits (up to two, if two files are listed) that changed the given files.",
                            "properties": {
                                "files": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    },
                                    "minItems": 1,
                                    "maxItems": 2
                                }
                            }
                        }
                    ]
                },
                "untracked": {
                    "type": "boolean",
                    "description": "Set to `true` to cache untracked files.",
                    "default": false
                },
                "policy": {
                    "type": "string",
                    "description": "Determines the strategy for downloading and updating the cache.",
                    "default": "pull-push",
                    "oneOf": [
                        {
                            "enum": [ "pull" ],
                            "description": "Pull will download cache but skip uploading after job completes."
                        },
                        {
                            "enum": [ "push" ],
                            "description": "Push will skip downloading cache and always recreate cache after job completes."
                        },
                        {
                            "enum": [ "pull-push" ],
                            "description": "Pull-push will both download cache at job start and upload cache on job success."
                        }
                    ]
                }
            }
        },
        "filter_refs": {
            "type": "array",
            "description": "Filter job by different keywords that determine origin or state, or by supplying string/regex to check against branch/tag names.",
            "items": {
                "anyOf": [
                    {
                        "oneOf": [
                            {
                                "enum": [ "branches" ],
                                "description": "When a branch is pushed."
                            },
                            {
                                "enum": [ "tags" ],
                                "description": "When a tag is pushed."
                            },
                            {
                                "enum": [ "api" ],
                                "description": "When a pipeline has been triggered by a second pipelines API (not triggers API)."
                            },
                            {
                                "enum": [ "external" ],
                                "description": "When using CI services other than Gitlab"
                            },
                            {
                                "enum": [ "pipelines" ],
                                "description": "For multi-project triggers, created using the API with 'CI_JOB_TOKEN'."
                            },
                            {
                                "enum": [ "pushes" ],
                                "description": "Pipeline is triggered by a `git push` by the user"
                            },
                            {
                                "enum": [ "schedules" ],
                                "description": "For scheduled pipelines."
                            },
                            {
                                "enum": [ "triggers" ],
                                "description": "For pipelines created using a trigger token."
                            },
                            {
                                "enum": [ "web" ],
                                "description": "For pipelines created using *Run pipeline* button in Gitlab UI (under your project's *Pipelines*)."
                            }
                        ]
                    },
                    {
                        "type": "string",
                        "description": "String or regular expression to match against tag or branch names."
                    }
                ]
            }
        },
        "filter": {
            "oneOf": [
                {
                    "$ref": "#/definitions/filter_refs"
                },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "refs": {
                            "$ref": "#/definitions/filter_refs"
                        },
                        "kubernetes": {
                            "enum": [ "active" ],
                            "description": "Filter job based on if Kubernetes integration is active."
                        },
                        "variables": {
                            "type": "array",
                            "description": "Filter job by checking comparing values of environment variables. Read more about variable expressions: https://docs.gitlab.com/ee/ci/variables/README.html#variables-expressions",
                            "items": {
                                "type": "string"
                            }
                        },
                        "changes": {
                            "type": "array",
                            "description": "Filter job creation based on files that were modified in a git push.",
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                }
            ]
        },
        "retry": {
            "description": "Retry a job if it fails. Can be a simple integer or object definition.",
            "oneOf": [
                { "$ref": "#/definitions/retry_max" },
                {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "max": { "$ref": "#/definitions/retry_max" },
                        "when": {
                            "description": "Either a single or array of error types to trigger job retry.",
                            "oneOf": [
                                { "$ref": "#/definitions/retry_errors" },
                                {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/retry_errors"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "retry_max": {
            "type": "integer",
            "description": "The number of times the job will be retried if it fails. Defaults to 0 and can max be retried 2 times (3 times total).",
            "default": 0,
            "minimum": 0,
            "maximum": 2
        },
        "retry_errors": {
            "oneOf": [
                {
                    "const": "always",
                    "description": "Retry on any failure (default)."
                },
                {
                    "const": "unknown_failure",
                    "description": "Retry when the failure reason is unknown."
                },
                {
                    "const": "script_failure",
                    "description": "Retry when the script failed."
                },
                {
                    "const": "api_failure",
                    "description": "Retry on API failure."
                },
                {
                    "const": "stuck_or_timeout_failure",
                    "description": "Retry when the job got stuck or timed out."
                },
                {
                    "const": "runner_system_failure",
                    "description": "Retry if there is a runner system failure (for example, job setup failed)."
                },
                {
                    "const": "missing_dependency_failure",
                    "description": "Retry if a dependency is missing."
                },
                {
                    "const": "runner_unsupported",
                    "description": "Retry if the runner is unsupported."
                },
                {
                    "const": "stale_schedule",
                    "description": "Retry if a delayed job could not be executed."
                },
                {
                    "const": "job_execution_timeout",
                    "description": "Retry if the script exceeded the maximum execution time set for the job."
                },
                {
                    "const": "archived_failure",
                    "description": "Retry if the job is archived and can’t be run."
                },
                {
                    "const": "unmet_prerequisites",
                    "description": "Retry if the job failed to complete prerequisite tasks."
                },
                {
                    "const": "scheduler_failure",
                    "description": "Retry if the scheduler failed to assign the job to a runner."
                },
                {
                    "const": "data_integrity_failure",
                    "description": "Retry if there is a structural integrity problem detected."
                }
            ]
        },
        "interruptible": {
            "type": "boolean",
            "description": "Interruptible is used to indicate that a job should be canceled if made redundant by a newer pipeline run.",
            "default": false
        },
        "job": {
            "allOf": [
                { "$ref": "#/definitions/job_template" },
                {
                    "anyOf": [
                        { "required": [ "script" ] },
                        { "required": [ "extends" ] },
                        { "required": [ "trigger" ] }
                    ]
                }
            ]
        },
        "job_template": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "image": { "$ref": "#/definitions/image" },
                "services": { "$ref": "#/definitions/services" },
                "before_script": { "$ref": "#/definitions/before_script" },
                "after_script": { "$ref": "#/definitions/after_script" },
                "rules": { "$ref": "#/definitions/rules" },
                "variables": { "$ref": "#/definitions/variables" },
                "cache": { "$ref": "#/definitions/cache" },
                "secrets": { "$ref": "#/definitions/secrets" },
                "script": {
                    "description": "Shell scripts executed by the Runner. The only required property of jobs. Be careful with special characters (e.g. `:`, `{`, `}`, `&`) and use single or double quotes to avoid issues.",
                    "oneOf": [
                        {
                            "type": "string",
                            "minLength": 1
                        },
                        {
                            "type": "array",
                            "items": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                ]
                            },
                            "minItems": 1
                        }
                    ]
                },
                "stage": {
                    "type": "string",
                    "description": "Define what stage the job will run in.",
                    "default": "test"
                },
                "only": {
                    "$ref": "#/definitions/filter",
                    "description": "Job will run *only* when these filtering options match."
                },
                "extends": {
                    "description": "The name of one or more jobs to inherit configuration from.",
                    "oneOf": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "array",
                            "items": {
                                "type": "string"
                            },
                            "minItems": 1
                        }
                    ]
                },
                "needs": {
                    "description": "The list of jobs in previous stages whose sole completion is needed to start the current job.",
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                    "job": {
                                        "type": "string"
                                    },
                                    "artifacts": {
                                        "type": "boolean"
                                    },
                                    "optional": {
                                        "type": "boolean"
                                    }
                                },
                                "required": [ "job" ]
                            },
                            {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                    "pipeline": {
                                        "type": "string"
                                    },
                                    "job": {
                                        "type": "string"
                                    },
                                    "artifacts": {
                                        "type": "boolean"
                                    }
                                },
                                "required": [ "job", "pipeline" ]
                            },
                            {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                    "job": {
                                        "type": "string"
                                    },
                                    "project": {
                                        "type": "string"
                                    },
                                    "ref": {
                                        "type": "string"
                                    },
                                    "artifacts": {
                                        "type": "boolean"
                                    }
                                },
                                "required": [ "job", "project", "ref" ]
                            }
                        ]
                    }
                },
                "except": {
                    "$ref": "#/definitions/filter",
                    "description": "Job will run *except* for when these filtering options match."
                },
                "tags": {
                    "$ref": "#/definitions/tags"
                },
                "allow_failure": {
                    "$ref": "#/definitions/allow_failure"
                },
                "timeout": {
                    "$ref": "#/definitions/timeout"
                },
                "when": {
                    "$ref": "#/definitions/when"
                },
                "start_in": {
                    "$ref": "#/definitions/start_in"
                },
                "dependencies": {
                    "type": "array",
                    "description": "Specify a list of job names from earlier stages from which artifacts should be loaded. By default, all previous artifacts are passed. Use an empty array to skip downloading artifacts.",
                    "items": {
                        "type": "string"
                    }
                },
                "artifacts": {
                    "$ref": "#/definitions/artifacts"
                },
                "environment": {
                    "description": "Used to associate environment metadata with a deploy. Environment can have a name and URL attached to it, and will be displayed under /environments under the project.",
                    "oneOf": [
                        { "type": "string" },
                        {
                            "type": "object",
                            "additionalProperties": false,
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "The name of the environment, e.g. 'qa', 'staging', 'production'.",
                                    "minLength": 1
                                },
                                "url": {
                                    "type": "string",
                                    "description": "When set, this will expose buttons in various places for the current environment in Gitlab, that will take you to the defined URL.",
                                    "format": "uri",
                                    "pattern": "^(https?://.+|\\$[A-Za-z]+)"
                                },
                                "on_stop": {
                                    "type": "string",
                                    "description": "The name of a job to execute when the environment is about to be stopped."
                                },
                                "action": {
                                    "enum": [ "start", "prepare", "stop" ],
                                    "description": "Specifies what this job will do. 'start' (default) indicates the job will start the deployment. 'prepare' indicates this will not affect the deployment. 'stop' indicates this will stop the deployment.",
                                    "default": "start"
                                },
                                "auto_stop_in": {
                                    "type": "string",
                                    "description": "The amount of time it should take before Gitlab will automatically stop the environment. Supports a wide variety of formats, e.g. '1 week', '3 mins 4 sec', '2 hrs 20 min', '2h20min', '6 mos 1 day', '47 yrs 6 mos and 4d', '3 weeks and 2 days'."
                                },
                                "kubernetes": {
                                    "type": "object",
                                    "description": "Used to configure the kubernetes deployment for this environment. This is currently not supported for kubernetes clusters that are managed by Gitlab.",
                                    "properties": {
                                        "namespace": {
                                            "type": "string",
                                            "description": "The kubernetes namespace where this environment should be deployed to.",
                                            "minLength": 1
                                        }
                                    }
                                },
                                "deployment_tier": {
                                    "type": "string",
                                    "description": "Explicitly specifies the tier of the deployment environment if non-standard environment name is used.",
                                    "enum": [
                                        "production",
                                        "staging",
                                        "testing",
                                        "development",
                                        "other"
                                    ]
                                }
                            },
                            "required": [ "name" ]
                        }
                    ]
                },
                "release": {
                    "type": "object",
                    "description": "Indicates that the job creates a Release.",
                    "additionalProperties": false,
                    "properties": {
                        "tag_name": {
                            "type": "string",
                            "description": "The tag_name must be specified. It can refer to an existing Git tag or can be specified by the user.",
                            "minLength": 1
                        },
                        "description": {
                            "type": "string",
                            "description": "Specifies the longer description of the Release.",
                            "minLength": 1
                        },
                        "name": {
                            "type": "string",
                            "description": "The Release name. If omitted, it is populated with the value of release: tag_name."
                        },
                        "ref": {
                            "type": "string",
                            "description": "If the release: tag_name doesn’t exist yet, the release is created from ref. ref can be a commit SHA, another tag name, or a branch name."
                        },
                        "milestones": {
                            "type": "array",
                            "description": "The title of each milestone the release is associated with.",
                            "items": {
                                "type": "string"
                            }
                        },
                        "released_at": {
                            "type": "string",
                            "description": "The date and time when the release is ready. Defaults to the current date and time if not defined. Should be enclosed in quotes and expressed in ISO 8601 format.",
                            "format": "date-time",
                            "pattern": "^(?:[1-9]\\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:Z|[+-][01]\\d:[0-5]\\d)$"
                        },
                        "assets": {
                            "type": "object",
                            "additionalProperties": false,
                            "properties": {
                                "links": {
                                    "type": "array",
                                    "description": "Include asset links in the release.",
                                    "items": {
                                        "type": "object",
                                        "additionalProperties": false,
                                        "properties": {
                                            "name": {
                                                "type": "string",
                                                "description": "The name of the link.",
                                                "minLength": 1
                                            },
                                            "url": {
                                                "type": "string",
                                                "description": "The URL to download a file.",
                                                "minLength": 1
                                            },
                                            "filepath": {
                                                "type": "string",
                                                "description": "The redirect link to the url."
                                            },
                                            "link_type": {
                                                "type": "string",
                                                "description": "The content kind of what users can download via url.",
                                                "enum": [
                                                    "runbook",
                                                    "package",
                                                    "image",
                                                    "other"
                                                ]
                                            }
                                        },
                                        "required": [ "name", "url" ]
                                    },
                                    "minItems": 1
                                }
                            },
                            "required": [ "links" ]
                        }
                    },
                    "required": [ "tag_name", "description" ]
                },
                "coverage": {
                    "type": "string",
                    "description": "Must be a regular expression, optionally but recommended to be quoted, and must be surrounded with '/'. Example: '/Code coverage: \\d+\\.\\d+/'",
                    "format": "regex",
                    "pattern": "^/.+/$"
                },
                "retry": {
                    "$ref": "#/definitions/retry"
                },
                "parallel": {
                    "description": "Parallel will split up a single job into several, and provide `CI_NODE_INDEX` and `CI_NODE_TOTAL` environment variables for the running jobs.",
                    "oneOf": [
                        {
                            "type": "integer",
                            "description": "Creates N instances of the same job that run in parallel.",
                            "default": 0,
                            "minimum": 2,
                            "maximum": 50
                        },
                        {
                            "type": "object",
                            "properties": {
                                "matrix": {
                                    "type": "array",
                                    "description": "Defines different variables for jobs that are running in parallel.",
                                    "items": {
                                        "type": "object",
                                        "description": "Defines environment variables for specific job.",
                                        "additionalProperties": {
                                            "type": [ "string", "number", "array" ]
                                        }
                                    },
                                    "maxItems": 50
                                }
                            },
                            "additionalProperties": false,
                            "required": [ "matrix" ]
                        }
                    ]
                },
                "interruptible": {
                    "$ref": "#/definitions/interruptible"
                },
                "resource_group": {
                    "type": "string",
                    "description": "Limit job concurrency. Can be used to ensure that the Runner will not run certain jobs simultaneously."
                },
                "trigger": {
                    "description": "Trigger allows you to define downstream pipeline trigger. When a job created from trigger definition is started by GitLab, a downstream pipeline gets created. Read more: https://docs.gitlab.com/ee/ci/yaml/README.html#trigger",
                    "oneOf": [
                        {
                            "type": "object",
                            "description": "Trigger a multi-project pipeline. Read more: https://docs.gitlab.com/ee/ci/yaml/README.html#simple-trigger-syntax-for-multi-project-pipelines",
                            "additionalProperties": false,
                            "properties": {
                                "project": {
                                    "description": "Path to the project, e.g. `group/project`, or `group/sub-group/project`.",
                                    "type": "string",
                                    "pattern": "\\S/\\S"
                                },
                                "branch": {
                                    "description": "The branch name that a downstream pipeline will use",
                                    "type": "string"
                                },
                                "strategy": {
                                    "description": "You can mirror the pipeline status from the triggered pipeline to the source bridge job by using strategy: depend",
                                    "type": "string",
                                    "enum": [ "depend" ]
                                }
                            },
                            "required": [ "project" ],
                            "dependencies": {
                                "branch": [ "project" ]
                            }
                        },
                        {
                            "type": "object",
                            "description": "Trigger a child pipeline. Read more: https://docs.gitlab.com/ee/ci/yaml/README.html#trigger-syntax-for-child-pipeline",
                            "additionalProperties": false,
                            "properties": {
                                "include": {
                                    "oneOf": [
                                        {
                                            "description": "Relative path from local repository root (`/`) to the local YAML file to define the pipeline configuration.",
                                            "type": "string",
                                            "format": "uri-reference",
                                            "pattern": "\\.ya?ml$"
                                        },
                                        {
                                            "type": "array",
                                            "description": "References a local file or an artifact from another job to define the pipeline configuration.",
                                            "maxItems": 3,
                                            "items": {
                                                "oneOf": [
                                                    {
                                                        "type": "object",
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "local": {
                                                                "description": "Relative path from local repository root (`/`) to the local YAML file to define the pipeline configuration.",
                                                                "type": "string",
                                                                "format": "uri-reference",
                                                                "pattern": "\\.ya?ml$"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "type": "object",
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "template": {
                                                                "description": "Name of the template YAML file to use in the pipeline configuration.",
                                                                "type": "string",
                                                                "format": "uri-reference",
                                                                "pattern": "\\.ya?ml$"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "type": "object",
                                                        "additionalProperties": false,
                                                        "properties": {
                                                            "artifact": {
                                                                "description": "Relative path to the generated YAML file which is extracted from the artifacts and used as the configuration for triggering the child pipeline.",
                                                                "type": "string",
                                                                "format": "uri-reference",
                                                                "pattern": "\\.ya?ml$"
                                                            },
                                                            "job": {
                                                                "description": "Job name which generates the artifact",
                                                                "type": "string"
                                                            }
                                                        },
                                                        "required": [ "artifact", "job" ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "strategy": {
                                    "description": "You can mirror the pipeline status from the triggered pipeline to the source bridge job by using strategy: depend",
                                    "type": "string",
                                    "enum": [ "depend" ]
                                }
                            }
                        },
                        {
                            "description": "Path to the project, e.g. `group/project`, or `group/sub-group/project`.",
                            "type": "string",
                            "pattern": "\\S/\\S"
                        }
                    ]
                },
                "inherit": {
                    "type": "object",
                    "description": "Controls inheritance of globally-defined defaults and variables. Boolean values control inheritance of all default: or variables: keywords. To inherit only a subset of default: or variables: keywords, specify what you wish to inherit. Anything not listed is not inherited.",
                    "properties": {
                        "default": {
                            "description": "Whether to inherit all globally-defined defaults or not. Or subset of inherited defaults",
                            "oneOf": [
                                {
                                    "type": "boolean"
                                },
                                {
                                    "type": "array",
                                    "items": {
                                        "type": "string",
                                        "enum": [
                                            "after_script",
                                            "artifacts",
                                            "before_script",
                                            "cache",
                                            "image",
                                            "interruptible",
                                            "retry",
                                            "services",
                                            "tags",
                                            "timeout"
                                        ]
                                    }
                                }
                            ]
                        },
                        "variables": {
                            "description": "Whether to inherit all globally-defined variables or not. Or subset of inherited variables",
                            "oneOf": [
                                { "type": "boolean" },
                                {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "oneOf": [
                {
                    "properties": {
                        "when": { "enum": [ "delayed" ] }
                    },
                    "required": [ "when", "start_in" ]
                },
                {
                    "properties": {
                        "when": {
                            "not": {
                                "enum": [ "delayed" ]
                            }
                        }
                    }
                }
            ]
        },
        "tags": {
            "type": "array",
            "description": "Used to select runners from the list of available runners. A runner must have all tags listed here to run the job.",
            "items": {
                "type": "string"
            }
        }
    }
};

export default Schema;
