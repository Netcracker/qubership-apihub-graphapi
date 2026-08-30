import { GRAPH_API_NODE_KIND_OBJECT, GRAPH_API_NODE_KIND_INTERFACE } from '../constants';
import { GraphApiComponents, GraphApiDirectiveDefinition, GraphApiScalarDefinition, GraphApiObjectDefinition, GraphApiUnionDefinition, GraphApiEnumDefinition, GraphApiInputObjectDefinition } from '../types';
export declare function printDirectiveDefinition(name: string, directive: GraphApiDirectiveDefinition, components?: GraphApiComponents): string;
export declare function printScalar(name: string, type: GraphApiScalarDefinition): string;
export declare function printObject(name: string, type: GraphApiObjectDefinition<typeof GRAPH_API_NODE_KIND_OBJECT>, components?: GraphApiComponents): string;
export declare function printInterface(name: string, type: GraphApiObjectDefinition<typeof GRAPH_API_NODE_KIND_INTERFACE>, components?: GraphApiComponents): string;
export declare function printUnion(name: string, type: GraphApiUnionDefinition): string;
export declare function printEnum(name: string, type: GraphApiEnumDefinition): string;
export declare function printInputObject(name: string, type: GraphApiInputObjectDefinition, components?: GraphApiComponents): string;
//# sourceMappingURL=definitions.printer.d.ts.map