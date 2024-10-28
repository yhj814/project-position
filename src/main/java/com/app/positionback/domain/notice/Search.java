package com.app.positionback.domain.notice;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter
@ToString
public class Search {
    String keyword;
    String[] types;
}
