FROM rust:latest as builder

RUN cargo new --bin chess-like-rs
WORKDIR ./chess-like-rs
COPY ./Cargo.toml ./Cargo.toml
COPY ./src ./src
RUN cargo build --release

FROM alpine:latest
COPY --from=builder /chess-like-rs/target/release/chess-like-rs ./chess-like-rs
CMD ["./chess-like-rs"]