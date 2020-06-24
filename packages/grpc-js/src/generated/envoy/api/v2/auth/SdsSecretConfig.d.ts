// Original file: deps/envoy-api/envoy/api/v2/auth/secret.proto

import { ConfigSource as _envoy_api_v2_core_ConfigSource, ConfigSource__Output as _envoy_api_v2_core_ConfigSource__Output } from '../../../../envoy/api/v2/core/ConfigSource';

export interface SdsSecretConfig {
  'name'?: (string);
  'sds_config'?: (_envoy_api_v2_core_ConfigSource);
}

export interface SdsSecretConfig__Output {
  'name': (string);
  'sds_config': (_envoy_api_v2_core_ConfigSource__Output);
}
