|Class|Design|Durability|Availability|Availability|Duration|Billable Size|Considerations|
|---|---|---|---|---|---|---|---|
|S3 Standard|Frequently accessed data|99.999999999%|99.99%|>= 3|None|None|None|
|S3 Standard-IA|Long-lived, infrequently accessed data|99.999999999%|99.9%|>= 3|30 days|128 KB|Per GB retrieval fees apply.|
|S3 Intelligent-Tiering|Long-lived data with changing or unknown access patterns|99.999999999%|99.9%|>= 3|30 days|None|Monitoring and automation fees per object apply. No retrieval fees.|
|S3 One Zone-IA|Long-lived, infrequently accessed, non-critical data|99.999999999%|99.5%|1|30 days|128 KB|Per GB retrieval fees apply. Not resilient to the loss of the Availability Zone.|
|S3 Glacier|Long-term data archiving with retrieval times ranging from minutes to hours|99.999999999%|99.99% (after you restore objects)|>= 3|90 days|40 KB|Per GB retrieval fees apply. You must first restore archived objects before you can access them. For information, see Restoring an archived object.|
|S3 Glacier Deep Archive|Archiving rarely accessed data with a default retrieval time of 12 hours|99.999999999%|99.99% (after you restore objects)|>= 3|180 days|40 KB|Per GB retrieval fees apply. You must first restore archived objects before you can access them. For information, see Restoring an archived object.|
