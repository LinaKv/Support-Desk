const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketsModel");
const { model } = require("mongoose");

//@desc  Get user ticket
//@route GET/api/tickets/:id
//@access Private
const getTicket = asyncHandler(async (req, res) => {
  //   get user using the id
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User don`t found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Auth");
  }

  res.status(200).json(ticket);
});

//@desc  Get user tickets
//@route GET/api/tickets
//@access Private
const getTickets = asyncHandler(async (req, res) => {
  //   get user using the id
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User don`t found");
  }

  const ticket = await Ticket.find({ user: req.user.id });

  res.status(200).json(ticket);
  //   res.status(200).json({ message: "getTickets" });
});

//@desc  Create user ticket
//@route POST /api/tickets
//@access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getTickets" });
});

//@desc  delete user ticket
//@route DELETE/api/tickets/:id
//@access Private
const deleteTicket = asyncHandler(async (req, res) => {
  //   get user using the id
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User don`t found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Auth");
  }

  await ticket.remove();

  res.status(200).json({ success: true });
});

//@desc  Update user ticket
//@route PUT/api/tickets/:id
//@access Private
const updateTicket = asyncHandler(async (req, res) => {
  //   get user using the id
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User don`t found");
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Not Auth");
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTicket);
});

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
};
