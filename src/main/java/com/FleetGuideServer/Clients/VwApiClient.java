package com.FleetGuideServer.Clients;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "vw-api", url = "https://api.productdata.volkswagenag.com/v3/catalog/")
public interface VwApiClient {
}
