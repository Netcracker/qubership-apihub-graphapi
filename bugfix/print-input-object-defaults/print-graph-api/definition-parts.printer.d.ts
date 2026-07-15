import { GraphApiArgs, GraphApiArgument, GraphApiComponents, GraphApiDirective, GraphApiInputObjectDefinition, GraphApiObjectDefinition, GraphApiObjectKind, GraphApiRef } from "../types";
export declare function printImplementedInterfaces(interfaces?: GraphApiRef[]): string;
export declare function printValueLiteral(value: unknown): string;
export declare function printFields(object: GraphApiObjectDefinition<GraphApiObjectKind>, components?: GraphApiComponents): string;
export declare function printInputFields(object: GraphApiInputObjectDefinition, components?: GraphApiComponents): string;
export declare function printArgsDefinition(args?: GraphApiArgs, indentation?: string, components?: GraphApiComponents): string;
export declare function printArgDefinition(name: string, arg: GraphApiArgument, indent?: string, first?: boolean, components?: GraphApiComponents): string;
export declare function printUsedDirectiveArgs(argsMeta?: Record<string, any>): string;
export declare function printProvidedArgValue(value: unknown): string;
export declare function printUsedDirectives(directives?: Record<string, GraphApiDirective>): string;
//# sourceMappingURL=definition-parts.printer.d.ts.map