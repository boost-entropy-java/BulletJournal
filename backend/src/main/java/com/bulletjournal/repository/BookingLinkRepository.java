package com.bulletjournal.repository;

import com.bulletjournal.repository.models.BookingLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingLinkRepository extends JpaRepository<BookingLink, String> {
}
