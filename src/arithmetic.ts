// Inspired by

type Numerics = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

/**
 * This give use numeric literal for tuple length
 * Length<[1,2,3,4]> => 4
 */
type Length<T extends any[]> = T extends { length: infer L} ? L : never;

/**
 * BuildTuple<3> => [any, any, any]
 * BuildTuple<1> => [any]
 */
type BuildTuple<numb extends Numerics,T extends any[] = []> = Length<T> extends numb ? T : BuildTuple<numb, [...T, any]>

/**
 * Addition on Types
 */
type Add<a extends Numerics, b extends Numerics> = Length<[...BuildTuple<a>, ...BuildTuple<b>]>

type AdditionResult = Add<8,2> // 10
let result10: AdditionResult;

/**
 * Subtract on Types
 */
type Subtract<a extends Numerics, b extends Numerics> = BuildTuple<a> extends [...(infer U), ...BuildTuple<b>] ? Length<U> : never

type SubtractResult = Subtract<8,2> // 6
let result6: SubtractResult;
