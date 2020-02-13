package com.bulletjournal.controller;

import com.bulletjournal.clients.UserClient;
import com.bulletjournal.config.SSOConfig;
import com.bulletjournal.controller.models.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
    public static final String MYSELF_ROUTE = "/api/myself";
    public static final String LOGOUT_MYSELF_ROUTE = "/api/myself/logout";

    @Autowired
    private UserClient userClient;

    @Autowired
    private SSOConfig ssoConfig;

    @GetMapping("/api/users/{username}")
    public User getUser(String username) {
        return userClient.getUser(username);
    }

    @GetMapping(MYSELF_ROUTE)
    public User getMyself() {
        String username = MDC.get(UserClient.USER_NAME_KEY);
        return userClient.getUser(username);
    }

    @PostMapping(LOGOUT_MYSELF_ROUTE)
    public RedirectView logout() {
        String username = MDC.get(UserClient.USER_NAME_KEY);
        LOGGER.info("Logging out " + username);
        this.userClient.logout(username);
        LOGGER.info(username + " is logged out, redirecting");
        return new RedirectView(this.ssoConfig.getEndpoint());
    }
}
