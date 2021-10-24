import {
    Grid, Column
} from "@carbon/react";

import React, {
    lazy as Import, Suspense, useEffect, useState
} from "react";

import { default as Waiter } from "./../../components/Loader/Index";
import Loader from "./../../components/Loader/Index";

const Component = ({description, Target, Authorizer}) => {
    const timeout = 1500;

    const Page = Import(() => import("./Page").then((Module) => Module));

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <Suspense fallback={(<Loader description={description} timeout={timeout}/>)}>
                    <Waiter description={description} timeout={timeout}>
                        <Page Target={Target} Authorizer={Authorizer}/>
                    </Waiter>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Component;