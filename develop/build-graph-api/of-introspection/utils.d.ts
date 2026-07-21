import type { IntrospectionInputValue, IntrospectionInterfaceType, IntrospectionObjectType } from "graphql";
import { ComponentsKind } from "./declarations";
export declare function createRef(kind: ComponentsKind, name: string): string;
export declare function isIntrospectionInterfaceType(objectType: IntrospectionObjectType | IntrospectionInterfaceType): objectType is IntrospectionInterfaceType;
export declare function getDefaultValue(arg: IntrospectionInputValue): unknown;
//# sourceMappingURL=utils.d.ts.map