package com.bulletjournal.templates.controller.model;

import java.util.ArrayList;
import java.util.List;

public class SampleTask {

    private Long id;

    private String name;

    private String content;

    private String metadata;

    private List<Step> steps = new ArrayList<>();

    public SampleTask() {
    }

    public SampleTask(Long id, String name, String content, String metadata, List<Step> steps) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.metadata = metadata;
        this.steps = steps;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMetadata() {
        return metadata;
    }

    public void setMetadata(String metadata) {
        this.metadata = metadata;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }
}
