# Create a function which takes two strings (p1 && p2 ⁠— which represent player 1 && 2) as arguments && returns a string stating the winner in a game of Rock, Paper, Scissors.

# Each argument will contain a single string "Rock", "Paper", or "Scissors". Return the winner according to the following rules

# Rock beats Scissors
# Scissors beats Paper
# Paper beats Rock
# If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" && if p1 && p2 are the same, return "It's a draw".

# Examples
# rps("Rock", "Paper") ➞ "The winner is p2"

# rps("Scissors", "Paper") ➞ "The winner is p1"

# rps("Paper", "Paper") ➞ "It's a draw"


def game(player1, player2)

  if player1 == "rock" && player2 == "scissors"
    return "The winner is player 1"
  elsif player1 =="scissors" && player2 == "rock"
    return "The winner is player 2"
  elsif player1 == "scissors" && player2 == "paper"
    return "The winner is player 1"
  elsif player1 == "paper" && player2 == "scissors"
    return "The winner is player 2"
  elsif player1 == "paper" && player2 == "rock"
    return "The winner is player 1"
  elsif player1 == "rock" && player2 == "paper"
    return "The winner is player 2"
  else
    return "It's a draw"
  end
end

p game("scissors", "rock")
