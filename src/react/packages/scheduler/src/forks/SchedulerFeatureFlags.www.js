/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

// $FlowFixMe[cannot-resolve-module]
const dynamicFeatureFlags = require("SchedulerFeatureFlags");

// Re-export dynamic flags from the www version.
export const {
  enableIsInputPending,
  enableSchedulerDebugging,
  enableProfiling: enableProfilingFeatureFlag,
  enableIsInputPendingContinuous,
  frameYieldMs,
  continuousYieldMs,
  maxYieldMs,
} = dynamicFeatureFlags;

export const enableProfiling = __PROFILE__ && enableProfilingFeatureFlag;
