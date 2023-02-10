FROM rust:latest as builder

RUN cargo new --bin chess-like-rs
WORKDIR ./chess-like-rs
COPY ./Cargo.toml ./Cargo.toml
COPY ./src ./src
COPY ./templates ./templates
COPY ./static ./static
RUN cargo build --release

FROM ubuntu:latest
COPY --from=builder /chess-like-rs/target/release/chess-like-rs ./chess-like-rs
COPY --from=builder /chess-like-rs/templates ./templates
COPY --from=builder /chess-like-rs/static ./static

ENV PORT=8000
ENV MONGO_URI="mongodb://localhost:27017"
CMD ["./chess-like-rs"]