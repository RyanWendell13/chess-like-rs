FROM rust:latest as builder

Run cargo new --bin chess-like-rs
WORKDIR ./chess-like-rs
Copy ./Cargo.toml ./Cargo.toml
Copy ./src ./src
Run cargo build --release

From centos:latest
COPY --from=builder /chess-like-rs/target/release/chess-like-rs ./chess-like-rs
CMD ["./chess-like-rs"]