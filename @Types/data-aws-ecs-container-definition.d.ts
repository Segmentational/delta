import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface DataAwsEcsContainerDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#container_name DataAwsEcsContainerDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#task_definition DataAwsEcsContainerDefinition#task_definition}
    */
    readonly taskDefinition: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition}
*/
export declare class DataAwsEcsContainerDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsContainerDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcsContainerDefinitionConfig);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string;
    get cpu(): number;
    get disableNetworking(): any;
    dockerLabels(key: string): string;
    environment(key: string): string;
    get id(): string;
    get image(): string;
    get imageDigest(): string;
    get memory(): number;
    get memoryReservation(): number;
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ecs-container-definition.d.ts.map